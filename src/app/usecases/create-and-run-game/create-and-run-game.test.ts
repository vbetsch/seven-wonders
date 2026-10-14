import 'reflect-metadata';
import { container } from 'tsyringe';
import { describe, it, expect, beforeEach, afterEach, vi, type Mocked } from 'vitest';
import { CreateAndRunGameUseCase } from './create-and-run-game.usecase';
import { Game } from '@/domain/logic/Game/game';
import { Master } from '@/domain/logic/Master/master';

vi.mock('@logic/Game/game');
vi.mock('@logic/Master/master');

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

    expect(Game).toHaveBeenCalledOnce();
    expect(Game).toHaveBeenCalledWith();
  });

  it('should create a Master with the Game instance', () => {
    useCase.handle();

    expect(Master).toHaveBeenCalledOnce();
    expect(Master).toHaveBeenCalledWith(mockGame);
  });

  it('should call install, prepare and run methods in order', () => {
    useCase.handle();

    expect(mockMaster.install).toHaveBeenCalledOnce();
    expect(mockMaster.prepare).toHaveBeenCalledOnce();
    expect(mockMaster.run).toHaveBeenCalledOnce();

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
