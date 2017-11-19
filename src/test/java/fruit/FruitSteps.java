package fruit;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import gherkin.deps.com.google.gson.Gson;

import java.io.PrintWriter;
import java.util.List;

/**
 * Created by Anna on 2017-11-19.
 */
public class FruitSteps {

    @Given("^the system knows about the following fruit:$")
    public void theSystemKnowsAboutTheFollowingFruit(List<Fruit> fruitList) throws Throwable { // Write code here that turns the phrase above into concrete actions // For automatic transformation, change DataTable to one of // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>. // E,K,V must be a scalar (String, Integer, Date, enum etc)
        Gson gson = new Gson();
        PrintWriter writer = new PrintWriter("fruit.json", "UTF-8");
        writer.println(gson.toJson(fruitList));
        writer.close();
    }
}
