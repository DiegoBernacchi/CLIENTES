package dm.cliente.business;

import java.util.ArrayList;
import java.util.List;
import dm.cliente.vo.ClienteVO;
import dm.cliente.vo.EnderecoVO;
import dm.cliente.vo.TelefoneVO;
import dm.cliente.vo.ValoresVO;

public class ClienteBusiness {

	public ClienteBusiness() {
	}

	public List<ClienteVO> retornaListaCliente() {
		List<ClienteVO> listaClientes = new ArrayList<>();
		
		ClienteVO cliente = new ClienteVO();
		cliente.setId(1L);
		cliente.setNome("Paulo");
		cliente.setEmail("paulo.fm@gmail.com");
		cliente.setCpf(123456);
		cliente.setObservacao("No último atendimento, o Sr. Paulo estava bastante irritado com a demora no cadastro das notas fiscais.");
		cliente.setFoto("http://loremflickr.com/g/150/150/face");
		
		TelefoneVO telefone = new TelefoneVO();
		telefone.setId(1L);
		telefone.setPais(55);
		telefone.setArea(21);
		telefone.setNumero(123456);
		
		EnderecoVO endereco = new EnderecoVO();
		endereco.setId(1L);
		endereco.setTipo("Rua");
		endereco.setLogradouro("Visconde de Souza");
		endereco.setNumero(23);
		endereco.setComplemento("Bloco 2, Ap 201");
		endereco.setBairro("Barra da Tijuca");
		endereco.setCidade("Rio de janeiro");
		endereco.setEstado("RJ");
		endereco.setPais("Brasil");
		
		cliente.setTelefone(telefone);
		cliente.setEndereco(endereco);
		
		listaClientes.add(cliente);
		
		ClienteVO cliente2 = new ClienteVO();
		cliente2.setId(2L);
		cliente2.setNome("Luiz");
		cliente2.setEmail("luiz.fm@gmail.com");
		cliente2.setCpf(3216578);
		cliente2.setObservacao("No último atendimento, o Sr. Luiz estava bastante irritado com a demora no cadastro das notas fiscais.");
		cliente2.setFoto("http://loremflickr.com/g/150/150/face");
		
		TelefoneVO telefone2 = new TelefoneVO();
		telefone2.setId(2L);
		telefone2.setPais(55);
		telefone2.setArea(31);
		telefone2.setNumero(123456);
		
		EnderecoVO endereco2 = new EnderecoVO();
		endereco2.setId(2L);
		endereco2.setTipo("Rua");
		endereco2.setLogradouro("Visconde de Souza");
		endereco2.setNumero(23);
		endereco2.setComplemento("Bloco 2, Ap 201");
		endereco2.setBairro("Barra da Tijuca");
		endereco2.setCidade("Rio de janeiro");
		endereco2.setEstado("RJ");
		endereco2.setPais("Brasil");
		
		cliente2.setTelefone(telefone2);
		cliente2.setEndereco(endereco2);
		
		listaClientes.add(cliente2);
		
		ClienteVO cliente3 = new ClienteVO();
		cliente3.setId(3L);
		cliente3.setNome("Carla");
		cliente3.setEmail("carla.fm@gmail.com");
		cliente3.setCpf(3216578);
		cliente3.setObservacao("No último atendimento, o Sra. Carla estava bastante irritado com a demora no cadastro das notas fiscais.");
		cliente3.setFoto("http://loremflickr.com/g/150/150/face");
		
		TelefoneVO telefone3 = new TelefoneVO();
		telefone3.setId(3L);
		telefone3.setPais(55);
		telefone3.setArea(41);
		telefone3.setNumero(123456);
		
		EnderecoVO endereco3 = new EnderecoVO();
		endereco3.setId(3L);
		endereco3.setTipo("Rua");
		endereco3.setLogradouro("Visconde de Souza");
		endereco3.setNumero(23);
		endereco3.setComplemento("Bloco 2, Ap 201");
		endereco3.setBairro("Barra da Tijuca");
		endereco3.setCidade("Rio de janeiro");
		endereco3.setEstado("RJ");
		endereco3.setPais("Brasil");
		
		cliente3.setTelefone(telefone3);
		cliente3.setEndereco(endereco3);
		
		listaClientes.add(cliente3);

		return listaClientes;
	}
	
	public ValoresVO retornaValores() {
		ValoresVO valor = new ValoresVO();
		
		valor.setValorSaldo(30.00);
		valor.setValorHistorico(90.00);
		valor.setValorUtilizado(50.00);
		valor.setValorPerdido(20.00);
		
		return valor;
	}
	
}
