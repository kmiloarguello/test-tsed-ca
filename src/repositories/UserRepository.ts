import { AppDataSource } from "../index";
import { User } from "../models";

const userRepository = AppDataSource.getRepository(User);

export const save = async (user: User): Promise<User> => {
  return userRepository.save(user);
};

export const findById = async (id: string): Promise<User | null> => {
  return userRepository.findOneOrFail({ where: { id: Number(id) } });
};

export const findByEmail = async (email: string): Promise<User | null> => {
  return userRepository.findOne({ where: { email } });
};
