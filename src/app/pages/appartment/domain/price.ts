import { CancellationPolicyType } from './cancellation_policy_type'

export class Price {
  price: number;
  securityDeposit: number;
  cleaningFee: number;
  cancellationPolicy: CancellationPolicyType;

  public totalPrice() {
    return this.price + (this.securityDeposit ? this.securityDeposit : 0) + (this.cleaningFee ? this.cleaningFee : 0);
  }
}
