### II. Tworzenie własnego emitera danych

W podobny sposób jak w poprzednim zadaniu chcielibyśmy obsługiwać pobieranie zdjęć dla zapytań `PhotoDownloader#searchForPhotos(String)`. W tym przypadku nie wystarczy jednak utworzyć obiektu `Observable` dla gotowego obiektu kolekcji zdjęć. Zanim zdjęcia zostaną pobrane, program musi wyszukać je w sieci używając podanego zapytania.

1.  Wszystkie te operacje powinny zostać wykonane wewnątrz obiektu `Observable`. Aby stworzyć `Observable` dla niestandardowego źródła emisji wykorzystaj konstrukcję:

    ```java
        Observable.create(observer -> {
            try {
                ...
                for (...) {
                   observer.onNext(...);
                }
                ...
                observer.onComplete();
            } catch (SomeError e) {
                observer.onError(e);
            }
        });
    ```
    
    **Uwaga:** Nie chcemy by błąd podczas pobierania pojedynczego zdjęcia przerywał cały proces. Należy pamiętać o tym, że wywołanie `onError` kończy całą emisję!  Strumień powinien zakończyć się błędem tylko w sytuacji, gdy samo wyszukiwanie zdjęć (`DuckDuckGoDriver#searchForImages`) się nie powiedzie.
	
	**Operacje do wykorzystania:** [`Create`](http://reactivex.io/documentation/operators/create.html)

1. Odpowiedz na pytania:
	- Czy sposób obsługi `Observable` po stronie `PhotoCrawler` różni się w obu przykładach?
	- Jakie wzorce projektowe zostały tu wykorzystane?
