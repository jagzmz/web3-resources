export const Sender = {
    React: "REACT",
};

// SCORE CARD
export const ENTITY_DATA_ERROR = "entity_data_error";
export const ENTITY_MISSING_FIELDS = "missing_fields";
export const ENTITY_ORBIS_ID_ERROR = "orbis_id_not_found";
export const ENTITY_LOOKUP_ERROR = "omni_lookup_error";
export const ENTITY_API_ERROR = "scorecard_fail";
export const OMNI_MISSING_FIELD_KEY_MAPPINGS = {
    nace2_main_section: "NACE",
    world_region: "Region",
    esg_global_score: "ESG",
    pd: "EDF PD",
    opre: "Revenue",
};

// ADS
export const ADS_ERROR = "ads_error";

// ENTITY INFO
export const FAVORITES_ERROR = "favorites_error";

// NER API & SCAN PAGE
export const ENTITIES_FOUND = "entities_found";
export const NO_ENTITIES_FOUND = "no_entities_found";
export const SCAN_ERROR = "scan_error";
export const SCAN_STARTED = "scan_started";

export const PAGE_SCAN = "page_scan";
export const PAGE_SCAN_STATUS = "page_scan_status";
export const PAGE_SCAN_RESULTS = "page_scan_results";

// STORE
export const SAVE_LOCAL = "save_local";
export const GET_LOCAL = "get_local";
export const LOCAL_NOT_FOUND = "local_not_found";
export const ACTIVE_DOMAIN = "active_domain";
export const MONITORED_LIST = "monitored_list";
export const ACTIVE_TAB_INFO = "active_tab_info";

// SEARCH API
export const SEARCH_ERROR = "search_error";
export const SEARCH_BY_NAME_MESSAGE = "results";
export const NO_SEARCH_RESULTS_FOUND = "no_entities_found";
export const NAVIGATION_CHANGE = "navigation_change";
export const USER_HISTORY = "user_history";

// MESSAGE EVENTS - TYPES
export const PAGE_RELOADED = "page_reloaded";
export const ACTIVE_TAB_CHANGED = "active_tab_changed";
export const MONITOR_LIST_CHANGE = "monitor_list_change";
export const SCAN_RESULTS = "scan_results";
export const IS_FIRST_TIME = "is_first_time";

// TYPEAHEAD API
export const TYPEAHEAD_SUGGESTION_SUCCESS = "success";
export const OMNI_OKTA_TOKEN = "omni_okta_token";

// NER API
export const NER_PROVIDER_KEY = "ner_provider";
export const DEFAULT_NER_PROVIDER = "aws";

// API SETTINGS
export const API_SETTINGS_KEY = "api_settings";
export const DEFAULT_API_SETTINGS = {
    useCachedScorecard: true,
    nerProvider: DEFAULT_NER_PROVIDER,
    useV2Entity: false,
};
