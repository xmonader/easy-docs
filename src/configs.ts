import * as http from "ts-rmb-http-client/dist/es6";
import * as grid from "grid3_client/dist/es6";

(window as any).configs = {};
(window as any).configs.client = http;
(window as any).configs.grid3_client = grid;
