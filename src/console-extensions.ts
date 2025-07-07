import { EncodedExtension } from '@openshift/dynamic-plugin-sdk-webpack';

const servingRuntimeGvk = {
  group: 'serving.kserve.io',
  version: 'v1alpha1',
  kind: 'ServingRuntime',
};

const inferenceServiceGvk = {
  group: 'serving.kserve.io',
  version: 'v1beta1',
  kind: 'InferenceService',
};

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
      model: servingRuntimeGvk,
    },
  },
  {
    type: 'console.navigation/resource-ns',
    properties: {
      id: 'ai-model-serving-isvcs',
      name: '%plugin__console-plugin-template~Inference Services%',
      perspective: 'admin',
      section: 'ai-model-serving',
      model: inferenceServiceGvk,
    },
  },
];

export default consoleExtensions;
