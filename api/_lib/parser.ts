import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest } from './types';

export function parseRequest(req: IncomingMessage) {
    console.log('HTTP ' + req.url);
    const { query } = parse(req.url || '/', true);
    const { url, title } = (query || {});

    const parsedRequest: ParsedRequest = {
        url: url as string,
        title: title as string
    };

    return parsedRequest;
}