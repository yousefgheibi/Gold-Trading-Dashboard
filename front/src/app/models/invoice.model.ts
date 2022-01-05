
import { ProductListModel } from "./productlist.model";

export interface InvioceModel{
    id ?: number ;
    name : string;
    created_at : string;
    updated_at ?: string;
    items : ProductListModel;
    totalPrice : number;
}
