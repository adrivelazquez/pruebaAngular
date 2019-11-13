import { ComentariosModule } from './comentarios.module';

describe('ComentariosModule', () => {
  let comentariosModule: ComentariosModule;

  beforeEach(() => {
    comentariosModule = new ComentariosModule();
  });

  it('should create an instance', () => {
    expect(comentariosModule).toBeTruthy();
  });
});
