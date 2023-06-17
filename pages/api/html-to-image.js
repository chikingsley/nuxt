const MAX_HTML_SIZE = 1024 * 1024; // 1MB
const PAGE_LOAD_TIMEOUT = 30000; // 30 seconds

import puppeteer from 'puppeteer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        // Handle only POST method
        res.status(405).send({ message: 'Only POST requests allowed' });
        return;
    }

    const html = req.body;

    if (html.length > MAX_HTML_SIZE) {
        res.status(400).send({ message: 'HTML size exceeds maximum limit' });
        return;
    }

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(html, { timeout: PAGE_LOAD_TIMEOUT });
        await page.setViewport({ width: 1024, height: 768 });
        const screenshot = await page.screenshot({ encoding: 'binary' });
        await browser.close();
        res.setHeader('Content-Type', 'image/png');
        res.send(screenshot);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
}
