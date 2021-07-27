---
title: Preview PR Deployments for React Native Projects - Part 2
date: "2021-05-15T21:12:03.284Z"
description: Time to complete the quest on the front end 
tags:
  [
    "github",
    "reactnative",
    "github-actions",
    "monorepo",
    "yarn",
    "workspaces",
  ]
---

*Note: This is a living document. I can/will alter/improve the content*

# Application side

We already covered the CI part of the implementation in this article. Please, check that out before you start to dive into this one.
1. We'll run get request to App Center API to fetch the list of available deployments
2. Add the list to your application
3. Create a list view out of the list of available deployments 
4. Download the bundle when the user taps an item on the list
5. Sync the bundle and codepush npm package will take care of the rest.


### Appcenter API
App Center has a well-documented API which we consume from the application. A fetch request against [codePushDeployments_list](https://openapi.appcenter.ms/#/codepush/codePushDeployments_list) required for listing available deployments. The available endpoint for App Center is listed on https://openapi.appcenter.ms/.

Even though it is a well-documented API, it was a little bit struggle at first. After I found what I was looking for, it got way straightforward. Open API has an approachable UI that lets you run the curl command from a browser so the parameters are easy to access.

After getting my hands dirty with API, I went ahead and integrate the endpoint on the front end. The frontend code is something similar to this.


## Frontend Code

I decided to build a dedicated developer screen that contains all available updates. I’m using react-router in my project but feel free to pick any navigation solutions of your choice. 
Here is my code for inspiration


```js
import React, { useCallback, useMemo, useState } from 'react';

import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner } from './Spiner';
import { RootState } from '../../reducers';

import { ListHeader } from './ListHeader';

export const DeveloperMenu = ({
  route,
}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const { errorNotification } = useNotifications();
  const deployments = useSelector(
    (state) => state.codepush.data
  );
  const [onDownloadingText, setOnDownloadingText] = useState(
    'Download is not initiated'
  );
  const isLoading = useSelector(
    (state) => state.codepush.loading
  );
  React.useEffect(() => {
    dispatch(codepush.listAvailableDeployments.trigger());
  }, []);

  const data = useMemo(
    () =>
      deployments.map(
        ({
          name,
          key,
          latestRelease,
        }: DeploymentProps): CodePushBucketProps & KeyExtractor => ({
          key,
          name,
          deploymentKey: key,
          targetBinaryRange: latestRelease
            ? latestRelease.targetBinaryRange
            : 'Bucket create but not deployed',
        })
      ),
    [deployments]
  );

  const onError = (error: Error) => {
    errorNotification(error.message);
  };

  const onDownloadProgress = (downloadProgress) => {
    if (downloadProgress) {
      setOnDownloadingText(
        'Downloading ' +
          downloadProgress.receivedBytes +
          ' of ' +
          downloadProgress.totalBytes
      );
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    const promise = codepush.listAvailableDeploymentsPromise(
      {},
      dispatch
    );
    promise.then(
      () => {
        setRefreshing(false);
      },
      (error) => {
        errorNotification(error.message);
        setRefreshing(false);
      }
    );
  }, []);

  return (
    <React.Fragment>
      <FlatList
        refreshing={refreshing}
        onRefresh={onRefresh}
        style={{
          flex: 1,
        }}
        data={data}
        renderItem={({ item })) => (
          <ListItem
            deploymentKey={item.deploymentKey}
            name={item.name}
            targetBinaryRange={item.targetBinaryRange}
            codePush={codePush}
            onDownloadProgress={onDownloadProgress}
            onError={onError}
          />
        )}
        ListHeaderComponent={
          <ListHeader onDownloadingText={onDownloadingText} />
        }
      />
    </React.Fragment>
  );
};
```

The video will be inserted here.

Voila.