import * as React from 'react';
import { ResourceEventStream } from '@openshift-console/dynamic-plugin-sdk';

export default function EventsTab(props: any) {
  return <ResourceEventStream resource={props.obj} />;
}
