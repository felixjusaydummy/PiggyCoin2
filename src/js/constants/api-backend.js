
const SERVER = "localhost";
const PORT = "5555";
// 
const DOMAIN = "https://ruhxbt88zj.execute-api.us-east-2.amazonaws.com/prod";
// const DOMAIN = "http://localhost:5555/temp/prod";



export const SIGNIN                             = DOMAIN + "/signin";
export const GETACCOUNTDETAILS                  = DOMAIN + "/account"
export const PURSE_ALLOCATION_ADD               = DOMAIN + "/account-purse-allocation-add"
// export const PURSE_ALLOCATION_ADD_CASH          = DOMAIN + "/account-purse-allocation-update"
export const PURSE_ALLOCATION_ADD_CASH          = DOMAIN + "/account/purse/update-purse"
// export const PURSE_ALLOCATION_DELETE            = DOMAIN + "/account-purse-allocation-delete"
export const PURSE_ALLOCATION_DELETE            = DOMAIN + "/account/purse/delete-purse"
// export const PURSE_ALLOCATION_RELEASE           = DOMAIN + "/account-purse-allocation-release-cash"
export const PURSE_ALLOCATION_RELEASE           = DOMAIN + "/account/purse/release-cash"
// export const VAULT_ALLOCATION_ADD               = DOMAIN + "/account-vault-allocation-add"
export const VAULT_ALLOCATION_ADD               = DOMAIN + "/account/vault/add-vault"
// export const VAULT_ALLOCATION_ADD_CASH          = DOMAIN + "/account-vault-allocation-add-cash"
export const VAULT_ALLOCATION_ADD_CASH          = DOMAIN + "/account/vault/update-vault"
// export const TRANSFER_SAVINGSACCOUNT_TO_VAULT               = DOMAIN + "/transfer-savingsaccount-to-vault"
export const TRANSFER_SAVINGSACCOUNT_TO_VAULT               = DOMAIN + "/account/transfer/savings-to-vault"
// export const TRANSFER_SAVINGSACCOUNT_FROM_VAULT             = DOMAIN + "/account/transfer-vault-to-savingsaccount"
export const TRANSFER_SAVINGSACCOUNT_FROM_VAULT             = DOMAIN + "/account/transfer/vault-to-savings"


export const BANKACCOUNT_ACCOUNTLIST_ENROLLACCOUNT          = DOMAIN + "/account/bank-account/add-account"


export const GIPHY_SELECT_AVATAR = "https://api.giphy.com/v1/gifs/search?api_key=bivIQK9bjz4uG82j7AGbHhFzSHFyghvD"