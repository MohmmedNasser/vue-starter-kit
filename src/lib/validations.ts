import z from 'zod';

export const profileSchema = z.object({
  username: z.string({ required_error: 'User Name is required' }).min(3, "Username must be at least 3 characters long"),
  about: z.string({ required_error: 'About is required' }).max(500, "About section cannot exceed 500 characters"),
  file: z.instanceof(File, { message: 'File is required' }),
  firstName: z.string({ required_error: 'First Name is required' }).min(1, "First name is required"),
  lastName: z.string({ required_error: 'Last Name is required' }).min(1, "Last name is required"),
  email: z.string({ required_error: 'Email is required' }).email("Invalid email address"),
  country: z.string({ required_error: 'Country is required' }).min(1, "Country is required"),

  comments: z.boolean().optional(),
  candidates: z.boolean().optional(),
  offers: z.boolean().optional(),

  pushNotifications: z.enum(["everything", "same_as_email", "no_push"], {
    required_error: "Please select a push notification option",
  }),
}).refine(
  (data) => data.comments || data.candidates || data.offers,
  {
    message: "At least one notification type must be selected",
    path: ["comments"]
  }
)
