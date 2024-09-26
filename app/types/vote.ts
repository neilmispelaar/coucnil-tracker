interface VoteRecord {
  councillorId: number
  vote: VoteOptionType | null
}

const VoteOptions = {
  YES: { value: 'YES', label: 'Yes' },
  NO: { value: 'NO', label: 'No' },
  ABSTAIN: { value: 'ABSTAIN', label: 'Abstain' },
} as const;

type VoteOptionType = typeof VoteOptions[keyof typeof VoteOptions]['value'];

export { VoteOptions };
export type { VoteOptionType, VoteRecord };
