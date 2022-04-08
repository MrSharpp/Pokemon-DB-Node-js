import { join } from "path";
import { Edge } from "edge.js";
import fs from 'fs';

const edge = new Edge({cache: false})
edge.mount(join(__dirname, 'views'))

export let setRenderer = (app: any) => {
    app.engine('edge', async (filepath: string, options: any, callback: Function) => {
        fs.readFile(filepath, async (err, content) => {
            if(err) return callback(err);
    
            const rendered = await edge.render(filepath)
            return callback(null, rendered)
        })
    })
}