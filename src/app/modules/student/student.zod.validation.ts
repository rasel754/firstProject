import { z } from "zod";

const userNameValidationSchema = z.object({
    firstName: z
      .string()
      .min(1, 'First name is required')
      .max(20, 'Name cannot be more than 20 characters')
      .transform((value) => value.trim()), // Trim spaces
    middleName: z
      .string()
      .optional()
      .transform((value) => value?.trim() || ''), // Trim spaces if provided
    lastName: z
      .string()
      .min(1, 'Last name is required')
      .transform((value) => value.trim()), // Trim spaces
  });
  
  // Example usage in other schemas
  const guardianValidationSchema = z.object({        
    fatherName: z
      .string()
      .min(1, 'Father\'s name is required')
      .transform((value) => value.trim()),
    fatherOccupation: z
      .string()
      .min(1, 'Father\'s occupation is required')
      .transform((value) => value.trim()),
    fatherContactNo: z
      .string()
      .min(1, 'Father\'s contact number is required')
      .transform((value) => value.trim()),
    motherName: z
      .string()
      .min(1, 'Mother\'s name is required')
      .transform((value) => value.trim()),
    motherOccupation: z
      .string()
      .min(1, 'Mother\'s occupation is required')
      .transform((value) => value.trim()),
    motherContactNo: z
      .string()
      .min(1, 'Mother\'s contact number is required')
      .transform((value) => value.trim()),
  });
  
  const localGuardianValidationSchema = z.object({
    name: z
      .string()
      .min(1, 'Local guardian\'s name is required'),
    occupation: z
      .string()
      .min(1, 'Local guardian\'s occupation is required'),
    contactNo: z
      .string()
      .min(1, 'Local guardian\'s contact number is required'),
    address: z
      .string()
      .min(1, 'Local guardian\'s address is required'),
  });
  
  const studentValidationSchema = z.object({
    id: z.string().min(1, 'ID is required'),
    name: userNameValidationSchema,
    gender: z.enum(['female', 'male', 'other'], {
      errorMap: () => ({ message: 'Gender must be one of: male, female, or other' }),
    }),
    dateOfBirth: z.string().optional(),
    email: z
      .string()
      .email('Invalid email format')
      .min(1, 'Email is required'),
    contactNo: z
      .string()
      .min(1, 'Contact number is required'),
    emergencyContactNo: z
      .string()
      .min(1, 'Emergency contact number is required'),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
    presentAddress: z
      .string()
      .min(1, 'Present address is required'),
    permanentAddress: z
      .string()
      .min(1, 'Permanent address is required'),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImg: z.string().url('Invalid profile image URL').optional(),
    isActive: z.enum(['active', 'blocked']).default('active'),
  });


  export default studentValidationSchema;