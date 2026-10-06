export type SkillLevel = 'Core' | 'Working Knowledge' | 'Developing';

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  title: string;
  icon: string; // lucide-react icon name
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Drafting',
    icon: 'PenTool', // Placeholder for lucide-react icon
    skills: [
      { name: 'AutoCAD', level: 'Core' },
      { name: 'Technical Drawing', level: 'Core' },
      { name: 'Shop Drawing', level: 'Core' },
      { name: 'As-Built Drawing', level: 'Core' }
    ]
  },
  {
    title: 'Quantity & Cost',
    icon: 'Calculator',
    skills: [
      { name: 'Quantity Takeoff', level: 'Core' },
      { name: 'Cost Estimation', level: 'Core' },
      { name: 'Microsoft Excel', level: 'Core' },
      { name: 'BOQ / RAB Support', level: 'Working Knowledge' }
    ]
  },
  {
    title: 'Digital Engineering',
    icon: 'Laptop',
    skills: [
      { name: 'Revit', level: 'Working Knowledge' },
      { name: 'BIM Modeling', level: 'Working Knowledge' },
      { name: '3D Design', level: 'Developing' }
    ]
  },
  {
    title: 'Construction',
    icon: 'HardHat', // or similar lucide icon
    skills: [
      { name: 'Construction Documentation', level: 'Core' },
      { name: 'Drawing Coordination', level: 'Working Knowledge' },
      { name: 'Basic Project Documentation', level: 'Working Knowledge' }
    ]
  }
];

export const skillCategories = skillsData;
