import { EncodedExtension } from '@openshift/dynamic-plugin-sdk-webpack';

const consoleExtensions: EncodedExtension[] = [
  {
    type: 'console.navigation/section',
    properties: {
      id: 'ai-model-serving',
      perspective: 'admin',
      name: '%plugin__console-plugin-template~AI Model Serving%',
      insertAfter: 'workloads',
    },
  },
  {
    type: 'console.navigation/resource-ns',
    properties: {
      id: 'ai-model-serving-runtimes',
      name: '%plugin__console-plugin-template~Serving Runtimes%',
      perspective: 'admin',
      section: 'ai-model-serving',
      model: {
        group: 'serving.kserve.io',
        version: 'v1alpha1',
        kind: 'ServingRuntime',
      },
    },
  },
];

export default consoleExtensions;
