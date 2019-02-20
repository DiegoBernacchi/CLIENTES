package dm.cliente.vo;

import java.io.Serializable;

public class ValoresVO implements Serializable {
	
	private static final long serialVersionUID = -2705891481574204120L;
	
	private Double valorSaldo;
	private Double valorHistorico;
	private Double valorUtilizado;
	private Double valorPerdido;
	
	public ValoresVO() {
	}

	public Double getValorSaldo() {
		return valorSaldo;
	}


	public void setValorSaldo(Double valorSaldo) {
		this.valorSaldo = valorSaldo;
	}

	public Double getValorHistorico() {
		return valorHistorico;
	}

	public void setValorHistorico(Double valorHistorico) {
		this.valorHistorico = valorHistorico;
	}

	public Double getValorUtilizado() {
		return valorUtilizado;
	}

	public void setValorUtilizado(Double valorUtilizado) {
		this.valorUtilizado = valorUtilizado;
	}

	public Double getValorPerdido() {
		return valorPerdido;
	}

	public void setValorPerdido(Double valorPerdido) {
		this.valorPerdido = valorPerdido;
	}
	
}
