import { useContext, useEffect, useState } from "react";
import { getCurrentTab } from "../utils";
import {
    MONITOR_LIST_CHANGE,
    PAGE_SCAN_STATUS,
    SCAN_STARTED,
} from "../utils/constants";
import { AppStore } from "../contexts/AppStore";
import storage from "../chrome/storage";
import Messenger from "../chrome/Messenger";

function useHighlight() {
    const [loading, setIsLoading] = useState(true);
    const { setScanResults, setLoadingState } = useContext(AppStore);

    const changeLoading = (isLoading) => {
        setIsLoading(isLoading);
        setLoadingState(isLoading);
    };
    useEffect(
        () =>
            /**
             * Reset loading
             */
            () => {
                setLoadingState(false);
            },
        []
    );
    const saveResult = (result, message) => {
        if (message === SCAN_STARTED) {
            changeLoading(true);
        } else {
            const payload = {
                payload: result,
                message,
            };
            setScanResults(payload);
            changeLoading(false);
        }
    };

    const scanPage = (messageType, reRun = false) => {
        changeLoading(true);
        getCurrentTab((tab) => {
            if (reRun) {
                Messenger.send(messageType, { payload: { reRun: true } });
            } else if (messageType === MONITOR_LIST_CHANGE) {
                Messenger.send(messageType, {
                    payload: { monitorListActive: true },
                });
            } else {
                // if the popup was closed when the page was scaned
                // we grab the results from storage if any
                storage.getItem(PAGE_SCAN_STATUS, (payload) => {
                    const scannedResults = payload.filter(
                        (item) => item.tabUrl === tab.url
                    )[0];

                    if (scannedResults) {
                        saveResult(scannedResults.data, scannedResults.message);
                    } else {
                        Messenger.send(messageType, {
                            payload: { reRun: true },
                        });
                    }
                });
            }
        });
    };

    useEffect(() => {
        // it should listen to the response with the data
        Messenger.listen(PAGE_SCAN_STATUS, async (payload) => {
            await saveResult(payload.data, payload.message);
        });
    });

    return { scanPage, loading };
}

export default useHighlight;
