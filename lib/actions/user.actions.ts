'use server';

import { revalidatePath } from 'next/cache';
import { handleError } from '../utils';
import prisma from '@/prisma/client';
import { redirect } from 'next/navigation';
import { CreateUserParams, UpdateUserParams } from '@/types/user.types';
import { ROUTES } from '@/constants';
import * as DB from "@prisma/client";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        ...user,
        planId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return JSON.parse(JSON.stringify(newUser));
  } catch (e) {
    handleError(e);
  }
};

export const getCurrentUser = async (userId: string) => {
  try {
    if (!userId) {
      console.error(`User with id ${userId} is not logged in!`);
      redirect(ROUTES.HOME);
    }
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) throw new Error(`User with id: ${userId} not found`);
    return JSON.parse(JSON.stringify(user));
  } catch (e) {
    handleError(e);
  }
};

export const getUserById = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) throw new Error(`User with id: ${userId} not found`);
    return JSON.parse(JSON.stringify(user));
  } catch (e) {
    handleError(e);
  }
};

export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { clerkId },
      data: user,
    });

    if (!updatedUser) throw new Error(`Failed during update user`);
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (e) {
    handleError(e);
  }
};

export const deleteUser = async (clerkId: string) => {
  try {
    const userToDelete = await prisma.user.findUnique({
      where: { clerkId },
    });
    if (!userToDelete) throw new Error(`User with id: ${clerkId} not found`);

    const deletedUser = await prisma.user.delete({
      where: { id: userToDelete.id },
    });
    revalidatePath(ROUTES.HOME);

    if (!deletedUser) throw new Error(`Failed during delete user`);
    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (e) {
    handleError(e);
  }
};
