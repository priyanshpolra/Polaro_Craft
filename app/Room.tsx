"use client";

import { ReactNode } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
    return (
        <LiveblocksProvider publicApiKey={"pk_dev_8BInK8O3vA_bp70t0RusXZ0Vq0-BDWUMIW58XsgZUWgCvQb6YhqExKTY6gMPGB6B"}>
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<div>Loading…</div>}>
            {children}
            </ClientSideSuspense>
        </RoomProvider>
        </LiveblocksProvider>
    );
}