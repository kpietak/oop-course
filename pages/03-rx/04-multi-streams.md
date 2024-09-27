### III. Obsługa wielu strumieni

1. Dodaj obsługę wielu zapytań o zdjęcia. W tym celu stwórz metody `PhotoCrawler#downloadPhotosForMultipleQueries(List<String)` oraz `PhotoDownloader#searchForPhotos(List<String>)`. 
   Metoda `searchForPhotos(List<String>)` powinna również zwracać obiekt `Observable<Photo>`.   
   Możesz wykorzystać i przerobić poniższy kod:

   ```java
   public List<Photo> searchForPhotos(List<String> searchQueries) throws IOException {
   		List<Photo> photos = new ArrayList<>();
   		for (String searchQuery : searchQueries) {
   			photos.addAll(searchForPhotos(searchQuery));
   		}
   		return photos;
   }
   ```
    **Operacje do wykorzystania:** [`Merge`](http://reactivex.io/documentation/operators/merge.html) lub [`FlatMap`](http://reactivex.io/documentation/operators/flatmap.html)

2. Uruchom aplikację używając przygotowanych metod dla wszystkich zapytań `TOPICS`, zdefiniowanych w `CrawlerApp`. Odpowiedz na pytanie: w jakiej kolejności pojawiają się na dysku zdjęcia z podanych zapytań?

3. Zmodyfikuj metodę `PhotoDownloader#searchForPhotos(List<String>)` tak aby zapytania były przetwarzane w wielu wątkach. Wykorzystaj [**Scheduler**](http://reactivex.io/documentation/scheduler.html) o nazwie **io**, zoptymalizowany pod obsługę operacji we/wy.

  **Uwaga:** Jeśli uruchomimy pobieranie zdjęć w innych wątkach niż wątek główny aplikacji, metoda `main` skończy się prawdopodobnie zanim wszystkie operacje dobiegną końca i program zostanie przerwany. Dlatego należy zadbać o to by główny wątek poczekał na pozostałe - najprościej w tym celu dodać na końcu funkcji `main` wywołanie `Thread.sleep(100_000)`.

  **Operacje do wykorzystania:** [`SubscribeOn`](http://reactivex.io/documentation/operators/subscribeon.html)
