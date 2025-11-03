import { CreateAccountDTO } from "@/types/dto/account.dto";

interface IAccountRepository {
  createAccount(user: CreateAccountDTO): Promise<void>;
  findUserByEmail(
    email: CreateAccountDTO["email"]
  ): Promise<CreateAccountDTO | null>;
}

export class AccountService {
  constructor(private accountRepository: IAccountRepository) {}

  async createAccount(user: CreateAccountDTO) {
    const emailExists = await this.accountRepository.findUserByEmail(
      user.email
    );
    if (emailExists) {
      throw new Error("Email already exists");
    }
    await this.accountRepository.createAccount(user);
  }

  async findUserByEmail(email: CreateAccountDTO["email"]) {
    return this.accountRepository.findUserByEmail(email);
  }
}
