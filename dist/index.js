"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = (code, content) => {
  let success = false;

  if (code >= 200 && code < 300 || code === 304) {
    success = true;
  }

  let baseInterface = {};

  switch (code) {
    case 100:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Continue`
      };
      break;

    case 101:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Switching Protocols`
      };
      break;

    case 200:
      baseInterface = {
        success,
        status_code: code,
        status_text: `OK`
      };
      break;

    case 201:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Created`
      };
      break;

    case 202:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Accepted`
      };
      break;

    case 203:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Non-Authoritative Information`
      };
      break;

    case 204:
      baseInterface = {
        success,
        status_code: code,
        status_text: `No Content`
      };
      break;

    case 205:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Reset Content`
      };
      break;

    case 206:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Partial Content`
      };
      break;

    case 300:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Multiple Choices`
      };
      break;

    case 301:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Moved Permanently`
      };
      break;

    case 302:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Found`
      };
      break;

    case 303:
      baseInterface = {
        success,
        status_code: code,
        status_text: `See Other`
      };
      break;

    case 304:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Not Modified`
      };
      break;

    case 305:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Use Proxy`
      };
      break;

    case 306:
      baseInterface = {
        success,
        status_code: code,
        status_text: `(Unused)`
      };
      break;

    case 307:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Temporary Redirect`
      };
      break;

    case 400:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Bad Request`
      };
      break;

    case 401:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Unauthorized`
      };
      break;

    case 402:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Payment Required`
      };
      break;

    case 403:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Forbidden`
      };
      break;

    case 404:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Not Found`
      };
      break;

    case 405:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Method Not Allowed`
      };
      break;

    case 406:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Not Acceptable`
      };
      break;

    case 407:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Proxy Authentication Required`
      };
      break;

    case 408:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Request Timeout`
      };
      break;

    case 409:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Conflict`
      };
      break;

    case 410:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Gone`
      };
      break;

    case 411:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Length Required`
      };
      break;

    case 412:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Precondition Failed`
      };
      break;

    case 413:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Request Entity Too Large`
      };
      break;

    case 414:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Request-URI Too Long`
      };
      break;

    case 415:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Unsupported Media Type`
      };
      break;

    case 416:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Requested Range Not Satisfiable`
      };
      break;

    case 417:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Expectation Failed`
      };
      break;

    case 500:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Internal Server Error`
      };
      break;

    case 501:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Not Implemented`
      };
      break;

    case 502:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Bad Gateway`
      };
      break;

    case 503:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Service Unavailable`
      };
      break;

    case 504:
      baseInterface = {
        success,
        status_code: code,
        status_text: `Gateway Timeout`
      };
      break;

    case 505:
      baseInterface = {
        success,
        status_code: code,
        status_text: `HTTP Version Not Supported`
      };
      break;
  }

  return Object.assign(baseInterface, { content });
};