import { test } from '@playwright/test';

interface AllureMetadata {
    feature?: string;
    story?: string;
    severity?: string;
    owner?: string;
    tag?: string;
}

export function addAllureMetadata(metadata: AllureMetadata) {
    const annotations = [];

    if (metadata.feature) {
        annotations.push({
            type: 'feature',
            description: metadata.feature,
        });
    }

    if (metadata.story) {
        annotations.push({
            type: 'story',
            description: metadata.story,
        });
    }

    if (metadata.severity) {
        annotations.push({
            type: 'severity',
            description: metadata.severity,
        });
    }

    if (metadata.owner) {
        annotations.push({
            type: 'owner',
            description: metadata.owner,
        });
    }

    if (metadata.tag) {
        annotations.push({
            type: 'tag',
            description: metadata.tag,
        });
    }

    test.info().annotations.push(...annotations);
}
