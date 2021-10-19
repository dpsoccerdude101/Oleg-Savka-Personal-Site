import javafx.application.Application;
import javafx.concurrent.Worker;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.ButtonType;
import javafx.scene.control.Dialog;
import javafx.scene.layout.StackPane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import javafx.util.Pair;
import netscape.javascript.JSObject;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.events.EventListener;
import org.w3c.dom.events.EventTarget;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Main extends Application {
    // for communication to the Javascript engine.
    private JSObject javascriptConnector;
    private Invoice invoice;
    private User user;

    // for communication from the Javascript engine. //
    private JavaConnector javaConnector = new JavaConnector();

    private static ArrayList<User> usersList = new ArrayList<User>();

    public static void main(String[] args) throws IOException {
        //grabs username and password keys off of github repo
        List<String> info = getUserDataFile();

        //adds those to list
        for (int count = 0; count < info.size(); count++){
            String[] userInfo = (info.get(count)).split(" ");
            usersList.add(new User(userInfo[0], userInfo[1]));
        }
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Mom and Pop's Clothing Store");
        StackPane pane = new StackPane ();
        pane.setPadding(new Insets(15, 5, 5, 5));

        final WebView browser = new WebView();
        WebEngine webEngine = browser.getEngine();
        webEngine.setJavaScriptEnabled(true);
        URL url = null;
        try {
            url = new URL("https://dpsoccerdude101.github.io/dpsoccerdude101.github.io/Lab07%20(Attempt%20%232)/LoginView.html");
            webEngine.load(url.toExternalForm());
        } catch (MalformedURLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            webEngine.loadContent("<html><head></head><body><h1>There's a bloody error.</h1></body></html>");
        }
        webEngine.getLoadWorker().stateProperty().addListener((observable, oldValue, newValue) -> {
            if (Worker.State.SUCCEEDED == newValue) {
                // set an interface object named 'javaConnector' in the web engine's page
                JSObject window = (JSObject) webEngine.executeScript("window");
                window.setMember("javaConnector", javaConnector);

                // get the Javascript connector object.
                javascriptConnector = (JSObject) webEngine.executeScript("getJsConnector()");
            }
        });

        pane.getChildren().add(browser);


        Scene scene = new Scene(pane, 300, 265);
        //600, 650
        primaryStage.setScene(scene);
        primaryStage.setResizable(false);

        primaryStage.show();

        //allows for the display of alerts
        browser.getEngine().setOnAlert(event -> showAlert(event.getData()));

        webEngine.getLoadWorker().stateProperty().addListener((ov, oldState, newState) -> {
            if (newState == Worker.State.SUCCEEDED) {
                //if login screen is presented
                //then check if toJavaLogin method has been called
                //if not then wait for it to be called
                //if so then check if passed or failed
                Document doc = webEngine.getDocument();
                Element title = (Element) doc.getElementById("title");
                EventListener listener = new EventListener() {
                    @Override
                    public void handleEvent(org.w3c.dom.events.Event ev) {
                        //changeDimension synthetic event has been called
                        //Therefore, if title == Lab07, then the new dimensions = those of Login
                        //and vice versa

                        if ((title.getTextContent().equals("Lab07"))) {
                            primaryStage.setWidth(325);
                            primaryStage.setHeight(315);
                        }
                        if (((title.getTextContent().equals("Login")))) {
                            primaryStage.setWidth(572);
                            primaryStage.setHeight(660);
                        }
                    }
                };
                Element button = (Element) doc.getElementById("back");
                ((EventTarget) button).addEventListener("changeDimensions", listener, false);
            }
        });
    }
    private static ArrayList<String> getUserDataFile () throws IOException {
        URL users = new URL("https://raw.githubusercontent.com/dpsoccerdude101/dpsoccerdude101.github.io/master/Lab07%20(Attempt%20%232)/Users.txt");
        BufferedReader input = new BufferedReader(new InputStreamReader(users.openStream()));
        ArrayList<String> list = new ArrayList<>();
        String inputLine;
        while ((inputLine = input.readLine()) != null) {
            list.add(inputLine);
        }
        input.close();
        return list;
    }
    private static boolean contains (User thatUser) {
        for (int count = 0; count < usersList.size(); count++) {
            User tempUser = usersList.get(count);
            if (tempUser.getUsername().equals(thatUser.getUsername())) {
                if (tempUser.getPassword().equals(thatUser.getPassword())) {
                    return true;
                }
            }
        }
        return false;
    }
    private void showAlert(String message) {
        Dialog<Void> alert = new Dialog<>();
        alert.getDialogPane().setContentText(message);
        alert.getDialogPane().getButtonTypes().add(ButtonType.OK);
        alert.showAndWait();
    }
    public class JavaConnector {

        private String value;
        /**
         * called when the JS side wants a String to be read.
         *
         * @param value
         *         the String to read
         */
        public void toJavaData(String value) {
            this.value = value;
            String[] tokens = value.split("&");
            Double[] tokensDouble = new Double[tokens.length];
            for (int count = 0; count < tokens.length; count++) {
                String[] miniTokens = tokens[count].split("=");
                tokensDouble[count] = Double.parseDouble(miniTokens[1]);
            }
            invoice = new Invoice(tokensDouble[0], tokensDouble[1], tokensDouble[2], tokensDouble[3], tokensDouble[4]);

            if (this.value != null) {
                javascriptConnector.call("showResult", ("$" + String.format("%.2f", invoice.getTotalBill())));
            }
        }
        public void toJavaLogin(String value) {
            this.value = value;
            String[] tokens = value.split("&");
            Pair<String, String> pair = new Pair<>((tokens[0].split("="))[1], (tokens[1].split("="))[1]);
            user = new User(pair.getKey(), pair.getValue());

            if (contains(user)) {
                javascriptConnector.call("goToQueryPage");
            }
            else {
                javascriptConnector.call("loginFailed");
            }
        }
    }
}

