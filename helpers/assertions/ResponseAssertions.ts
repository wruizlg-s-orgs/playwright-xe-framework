import { expect, APIResponse } from '@playwright/test';

export class ResponseAssertions {
    static async expectStatus(response: APIResponse, expectedStatus: number) {
        expect(response.status()).toBe(expectedStatus);
    }

    static async expectSuccess(response: APIResponse) {
        expect(response.ok()).toBeTruthy();
    }

    static async expectError(response: APIResponse, expectedStatus: number) {
        expect(response.status()).toBe(expectedStatus);
    }
}
