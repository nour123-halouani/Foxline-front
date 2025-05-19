import { z } from "zod";

export const signInSchema = (
    t: (key: string, params?: Record<string, any>) => string
) =>
    z.object({
        email: z.string()
            .nonempty({ message: t('requiredField') })
            .email({ message: t('invalidEmail') })
        ,
        password: z.string()
            .nonempty({ message: t('requiredField') })
            .min(8, {
                message: t('passwordMinLength', { length: 8 }),
            })
    });

export const signUpSchema = (
    t: (key: string, params?: Record<string, any>) => string
) =>
    z.object({
        isCompany: z.boolean(),
        fullName: z.string()
            .nonempty({ message: t('requiredField') })
            .min(10, {
                message: t('fullNameMinLength', { length: 10 }),
            })
        ,
        email: z.string()
            .nonempty({ message: t('requiredField') })
            .email({ message: t('invalidEmail') })
        ,
        password: z.string()
            .nonempty({ message: t('requiredField') })
            .min(8, {
                message: t('passwordMinLength', { length: 8 }),
            })
        ,
        phone: z.string()
            .nonempty({ message: t('requiredField') }),
        confirmPassword: z.string()
            .nonempty({ message: t('requiredField') }),
    }).refine((data) => data.password === data.confirmPassword, {
        message: t('passwordsDontMatch'),
        path: ['confirmPassword'],
    });
