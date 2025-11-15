import 'reflect-metadata';
import { container } from 'tsyringe';
import { CreateAndRunGameUseCase } from '@usecases/create-and-run-game/create-and-run-game.usecase';
import { Game } from '@engine/Game/game';
import { Master } from '@engine/Master/master';

jest.mock('@engine/Game/game');
jest.mock('@engine/Master/master');

describe('CreateAndRunGameUseCase', () => {
  let useCase: CreateAndRunGameUseCase;
  let mockGame: jest.Mocked<Game>;
  let mockMaster: jest.Mocked<Master>;

  beforeEach(() => {
    jest.clearAllMocks();

    mockGame = new Game() as jest.Mocked<Game>;
    mockMaster = {
      install: jest.fn(),
      prepare: jest.fn(),
      run: jest.fn(),
    } as unknown as jest.Mocked<Master>;

    (Master as jest.MockedClass<typeof Master>).mockImplementation(
      () => mockMaster
    );

    container.clearInstances();
    useCase = container.resolve(CreateAndRunGameUseCase);
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

    const installOrder: number = mockMaster.install.mock.invocationCallOrder[0];
    const prepareOrder: number = mockMaster.prepare.mock.invocationCallOrder[0];
    const runOrder: number = mockMaster.run.mock.invocationCallOrder[0];

    expect(installOrder).toBeLessThan(prepareOrder);
    expect(prepareOrder).toBeLessThan(runOrder);
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
