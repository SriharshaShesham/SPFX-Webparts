import { WebPartContext } from "@microsoft/sp-webpart-base";  
import { sp } from "@pnp/sp/presets/all";  
  
export class PnpSPFunctions {  
    constructor(private context: WebPartContext) {  
        sp.setup({  
            spfxContext: this.context  
        });  
    }  
  
    public async getFields(selectedList: string): Promise<any> {  
        try {  
            const allFields: any[] = await sp.web.lists  
                .getById(selectedList).  
                fields.  
                filter("Hidden eq false and ReadOnlyField eq false").get();;  
            return allFields;  
        }  
        catch (err) {  
            Promise.reject(err);  
        }  
    }
    
    public async getListItems(selectedList: string): Promise<any> {  
        try {  
            const allItems: any[] = await sp.web.lists  
                .getById(selectedList).  
                items
                .expand("FieldValuesAsText")
                .get();
            // //console.log(allItems);
            return allItems;  
        }  
        catch (err) {  
            Promise.reject(err);  
        }  
    }

    public async getListItemsForFields(selectedList: string,fields:string[]): Promise<any> {  
        try {  
            const allItems: any[] = await sp.web.lists  
                .getById(selectedList).  
                items.  
                select(fields.join(','))
                .expand("FieldValuesAsText")
                .get();
            // //console.log(allItems);
            return allItems;  
        }  
        catch (err) {  
            Promise.reject(err);  
        }  
    }  
} 