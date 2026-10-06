export interface Metric {
  value: string;
  label: string;
}

export const metrics: Metric[] = [
  { value: '1+', label: 'Years Experience' },
  { value: '3+', label: 'Projects Completed' },
];
