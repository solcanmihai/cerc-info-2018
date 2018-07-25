import { TeacherDashboardModule } from './teacher-dashboard.module';

describe('TeacherDashboardModule', () => {
  let teacherDashboardModule: TeacherDashboardModule;

  beforeEach(() => {
    teacherDashboardModule = new TeacherDashboardModule();
  });

  it('should create an instance', () => {
    expect(teacherDashboardModule).toBeTruthy();
  });
});
