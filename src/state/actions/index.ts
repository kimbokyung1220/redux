interface DepositAction {
    type: "deposit"
    payload: number
}

interface WithdrawAction {
    type: "withdraw"
    payload: number
}

interface BankruptAction {
    type: "bankupt"
}

export type Action = DepositAction | WithdrawAction | BankruptAction
