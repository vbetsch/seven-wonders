import { Profile } from './profile';

describe('Profile', () => {
  it('should be well implemented', () => {
    const profile: Profile = new Profile({ name: 'test' });
    expect(profile).toBeDefined();
    expect(profile).toBeInstanceOf(Profile);
  });
  it('should have a name', () => {
    const profile: Profile = new Profile({ name: 'test' });
    expect(profile.name).toBe('test');
  });
  it('should play', () => {
    const profile: Profile = new Profile({ name: 'test' });
    profile.play();
  });
});
