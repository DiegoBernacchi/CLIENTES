package dm.cliente.app;

import java.util.Map;
import com.sun.jersey.api.core.ResourceConfig;

public class Application extends ResourceConfig {
	@Override
	public boolean getFeature(String arg0) {
		return false;
	}

	@Override
	public Map<String, Boolean> getFeatures() {
		return null;
	}

	@Override
	public Map<String, Object> getProperties() {
		return null;
	}

	@Override
	public Object getProperty(String arg0) {
		return null;
	}
}