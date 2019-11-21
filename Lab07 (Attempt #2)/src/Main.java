
import javafx.application.Application;
import javafx.concurrent.Worker;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import netscape.javascript.JSObject;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class Main<inputLine> extends Application {
    // for communication to the Javascript engine.
    private JSObject javascriptConnector;
    private Invoice invoice;
    // for communication from the Javascript engine. //
    private JavaConnector javaConnector = new JavaConnector();

    private ArrayList<User> usersList = new ArrayList<User>();

    private static String getUserDataFile () throws IOException {
        URL users = new URL("Users.txt");
        BufferedReader input = new BufferedReader(new InputStreamReader(users.openStream()));
        StringBuilder sb = new StringBuilder(1024);
        String inputLine;
        while ((inputLine = input.readLine()) != null) {
            sb.append(inputLine);
            sb.append(" ");
            System.out.println(inputLine);
        }
        input.close();
        return sb.toString();
    }

    public static void main(String[] args) throws IOException {
        String userText = getUserDataFile();
        
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Mom and Pop's Clothing Store");
        StackPane pane = new StackPane ();
        pane.setPadding(new Insets(15, 5, 5, 5));

        final WebView browser = new WebView();
        // final WebEngine webEngine = browser.getEngine();
        WebEngine webEngine = browser.getEngine();

        URL url = null;
        try {
            url = new URL("https://dpsoccerdude101.github.io/dpsoccerdude101.github.io/Lab07%20(Attempt%20%232)/Lab07.html");
            System.out.print(url.toExternalForm());
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
        pane.setPrefWidth(550);
        pane.setPrefHeight(610);
        //200, 250
        Scene scene = new Scene(pane, 600, 650);
        primaryStage.setScene(scene);

        primaryStage.show();

/*        webEngine.getLoadWorker().stateProperty().addListener((ov, oldState, newState) -> {
            if (newState == State.SUCCEEDED) {
                EventListener listener = new EventListener() {
                    @Override
                    public void handleEvent(org.w3c.dom.events.Event ev) {
                        //matchedHouses.clear();
                    }
                };
                Document doc = webEngine.getDocument();
                Element reset = doc.getElementById("reset");
                ((EventTarget) reset).addEventListener("click", listener, false);
            }
        });*/
        // set up the listener

    }
    public class JavaConnector {

        private String value;
        /**
         * called when the JS side wants a String to be converted.
         *
         * @param value
         *         the String to convert
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
                javascriptConnector.call("showResult", String.format("%.2f", invoice.getTotalBill()));
            }
        }
        public void toJavaLogin(String value) {
            this.value = value;
            String[] tokens = value.split("&");
            Double[] tokensDouble = new Double[tokens.length];
            for (int count = 0; count < tokens.length; count++) {
                String[] miniTokens = tokens[count].split("=");
                tokensDouble[count] = Double.parseDouble(miniTokens[1]);
            }
            invoice = new Invoice(tokensDouble[0], tokensDouble[1], tokensDouble[2], tokensDouble[3], tokensDouble[4]);

            if (this.value != null) {
                javascriptConnector.call("showResult", String.format("%.2f", invoice.getTotalBill()));
            }
        }
    }
}

