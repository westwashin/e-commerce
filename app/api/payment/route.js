import {NextResponse} from "next/server";
import Midtrans from "midtrans-client";
import _ from "lodash";

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.SERVER_KEY,
    clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY,
});

export async function POST(req) {
    const parameter = {
        item_details: [
            {
            id: _.random(100000, 99999),
            price: 2000,
            quantity: 1,
            name: "this name",
            },
        ],
        transaction_details: {
            order_id: _.random(100000, 999999),
            gross_amount: 2000,
        },
    };

    const token = await snap.createTransactionToken(parameter);

    return NextResponse.json({
            token,
    });
}