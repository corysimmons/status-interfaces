"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = code => {
  let success = false;

  if (code >= 200 && code < 300 || code === 304) {
    success = true;
  }

  switch (code) {
    case 100:
      return {
        success,
        status_code: code,
        status_text: `Continue`
      };

    case 101:
      return {
        success,
        status_code: code,
        status_text: `Switching Protocols`
      };

    case 200:
      return {
        success,
        status_code: code,
        status_text: `OK`
      };

    case 201:
      return {
        success,
        status_code: code,
        status_text: `Created`
      };

    case 202:
      return {
        success,
        status_code: code,
        status_text: `Accepted`
      };

    case 203:
      return {
        success,
        status_code: code,
        status_text: `Non-Authoritative Information`
      };

    case 204:
      return {
        success,
        status_code: code,
        status_text: `No Content`
      };

    case 205:
      return {
        success,
        status_code: code,
        status_text: `Reset Content`
      };

    case 206:
      return {
        success,
        status_code: code,
        status_text: `Partial Content`
      };

    case 300:
      return {
        success,
        status_code: code,
        status_text: `Multiple Choices`
      };

    case 301:
      return {
        success,
        status_code: code,
        status_text: `Moved Permanently`
      };

    case 302:
      return {
        success,
        status_code: code,
        status_text: `Found`
      };

    case 303:
      return {
        success,
        status_code: code,
        status_text: `See Other`
      };

    case 304:
      return {
        success,
        status_code: code,
        status_text: `Not Modified`
      };

    case 305:
      return {
        success,
        status_code: code,
        status_text: `Use Proxy`
      };

    case 306:
      return {
        success,
        status_code: code,
        status_text: `(Unused)`
      };

    case 307:
      return {
        success,
        status_code: code,
        status_text: `Temporary Redirect`
      };

    case 400:
      return {
        success,
        status_code: code,
        status_text: `Bad Request`
      };

    case 401:
      return {
        success,
        status_code: code,
        status_text: `Unauthorized`
      };

    case 402:
      return {
        success,
        status_code: code,
        status_text: `Payment Required`
      };

    case 403:
      return {
        success,
        status_code: code,
        status_text: `Forbidden`
      };

    case 404:
      return {
        success,
        status_code: code,
        status_text: `Not Found`
      };

    case 405:
      return {
        success,
        status_code: code,
        status_text: `Method Not Allowed`
      };

    case 406:
      return {
        success,
        status_code: code,
        status_text: `Not Acceptable`
      };

    case 407:
      return {
        success,
        status_code: code,
        status_text: `Proxy Authentication Required`
      };

    case 408:
      return {
        success,
        status_code: code,
        status_text: `Request Timeout`
      };

    case 409:
      return {
        success,
        status_code: code,
        status_text: `Conflict`
      };

    case 410:
      return {
        success,
        status_code: code,
        status_text: `Gone`
      };

    case 411:
      return {
        success,
        status_code: code,
        status_text: `Length Required`
      };

    case 412:
      return {
        success,
        status_code: code,
        status_text: `Precondition Failed`
      };

    case 413:
      return {
        success,
        status_code: code,
        status_text: `Request Entity Too Large`
      };

    case 414:
      return {
        success,
        status_code: code,
        status_text: `Request-URI Too Long`
      };

    case 415:
      return {
        success,
        status_code: code,
        status_text: `Unsupported Media Type`
      };

    case 416:
      return {
        success,
        status_code: code,
        status_text: `Requested Range Not Satisfiable`
      };

    case 417:
      return {
        success,
        status_code: code,
        status_text: `Expectation Failed`
      };

    case 500:
      return {
        success,
        status_code: code,
        status_text: `Internal Server Error`
      };

    case 501:
      return {
        success,
        status_code: code,
        status_text: `Not Implemented`
      };

    case 502:
      return {
        success,
        status_code: code,
        status_text: `Bad Gateway`
      };

    case 503:
      return {
        success,
        status_code: code,
        status_text: `Service Unavailable`
      };

    case 504:
      return {
        success,
        status_code: code,
        status_text: `Gateway Timeout`
      };

    case 505:
      return {
        success,
        status_code: code,
        status_text: `HTTP Version Not Supported`
      };
  }
};