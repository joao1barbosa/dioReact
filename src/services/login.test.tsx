import { login } from "./login";

describe('login test', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;

    it('Deve exibir um alert com boas vindas', () => {
        login();
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo(a)!');
    });
});