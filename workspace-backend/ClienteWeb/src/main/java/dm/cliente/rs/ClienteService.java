package dm.cliente.rs;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import com.google.gson.Gson;
import dm.cliente.business.ClienteBusiness;

@Path("cliente")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class ClienteService {

	@GET
	@Path("listar")
	public Response listar() {
		ClienteBusiness clienteBusiness = new ClienteBusiness();
		return Response.ok(new Gson().toJson(clienteBusiness.retornaListaCliente())).build();
	}

	@GET
	@Path("valores")
	public Response valores() {
		ClienteBusiness clienteBusiness = new ClienteBusiness();
		return Response.ok(new Gson().toJson(clienteBusiness.retornaValores())).build();
	}

}