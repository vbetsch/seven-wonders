import 'reflect-metadata';
import { container } from 'tsyringe';
import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  vi,
  type Mocked,
} from 'vitest';
import { CreateAndRunGameUseCase } from '@usecases/create-and-run-game/create-and-run-game.usecase';
import { Game } from '@engine/Game/game';
import { Master } from '@engine/Master/master';

vi.mock('@engine/Game/game');
vi.mock('@engine/Master/master');

describe('CreateAndRunGameUseCase', () => {
  let useCase: CreateAndRunGameUseCase;
  let mockGame: Mocked<Game>;
  let mockMaster: Mocked<Master>;

  beforeEach(() => {
    mockGame = {} as Mocked<Game>;
    mockMaster = {
      install: vi.fn(),
      prepare: vi.fn(),
      run: vi.fn(),
    } as unknown as Mocked<Master>;

    vi.mocked(Game).mockImplementation(function () {
      return mockGame;
    });
    vi.mocked(Master).mockImplementation(function () {
      return mockMaster;
    });

    container.clearInstances();
    useCase = container.resolve(CreateAndRunGameUseCase);

    vi.clearAllMocks();
  });

  afterEach(() => {
    container.clearInstances();
  });

  it('should be well implemented', () => {
    expect(useCase).toBeTruthy();
    expect(useCase).toBeInstanceOf(CreateAndRunGameUseCase);
    expect(useCase).toBeDefined();
  });

  it('should create a new Game instance', () => {
    useCase.handle();

    expect(Game).toHaveBeenCalledTimes(1);
    expect(Game).toHaveBeenCalledWith();
  });

  it('should create a Master with the Game instance', () => {
    useCase.handle();

    expect(Master).toHaveBeenCalledTimes(1);
    expect(Master).toHaveBeenCalledWith(mockGame);
  });

  it('should call install, prepare and run methods in order', () => {
    useCase.handle();

    expect(mockMaster.install).toHaveBeenCalledTimes(1);
    expect(mockMaster.prepare).toHaveBeenCalledTimes(1);
    expect(mockMaster.run).toHaveBeenCalledTimes(1);

    expect(mockMaster.install).toHaveBeenCalledBefore(mockMaster.prepare);
    expect(mockMaster.prepare).toHaveBeenCalledBefore(mockMaster.run);
  });

  it('should execute the complete game flow', () => {
    useCase.handle();

    expect(Game).toHaveBeenCalled();
    expect(Master).toHaveBeenCalledWith(mockGame);
    expect(mockMaster.install).toHaveBeenCalled();
    expect(mockMaster.prepare).toHaveBeenCalled();
    expect(mockMaster.run).toHaveBeenCalled();
  });
});
