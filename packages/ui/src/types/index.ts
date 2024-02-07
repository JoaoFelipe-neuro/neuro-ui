export type AsChildProps<DefaultElementProps, VariantsProps> = VariantsProps &
  DefaultElementProps &
  ({ asChild?: false } | { asChild: true; children: React.ReactNode });
