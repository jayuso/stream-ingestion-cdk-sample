#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { StreamIngestionCdkStack } from '../lib/stream-ingestion-cdk-stack';

const app = new cdk.App();
new StreamIngestionCdkStack(app, 'StreamIngestionCdkStack');
