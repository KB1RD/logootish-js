/**
 * A type used to identify a branch. This value should be used to look up a
 * user-presentable name in another map stored outside of `logootish-js`. This
 * is implementation-defined and allows for the broadest possible definition of
 * a branch.
 */
type BranchKey = symbol | string | number

class BranchOrder {
  constructor(public readonly order: BranchKey[] = []) {}

  get length(): number {
    return this.order.length
  }

  /**
   * Finds the index of `br` and adds it to the order if necessary.
   * @param br The branch to find the index of
   * @return The index of `br`
   */
  i(br: BranchKey): number {
    if (!this.order.includes(br)) {
      this.order.push(br)
      return this.order.length - 1
    }
    return this.order.indexOf(br)
  }
  b(index: number): BranchKey {
    return this.order[index]
  }

  static fromJSON(
    // eslint-disable-next-line
    json: any[],
    // eslint-disable-next-line
    mapper: (k: any) => BranchKey = (k: any): BranchKey => k
  ): BranchOrder {
    return new BranchOrder(json.map(mapper))
  }

  // eslint-disable-next-line
  toJSON(mapper: (k: BranchKey) => any = (k: BranchKey): any => k): any[] {
    return this.order.map(mapper)
  }
}

export { BranchKey, BranchOrder }
