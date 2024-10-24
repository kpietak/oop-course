import {Callout} from 'nextra/components'

#### Komenda dodawania transakcji

1. Stwórz klasę `AddTransactionCommand` implementującą interfejs `Command`. Zastąpi ona obecną operację dodawania transakcji. 
2. Do poprawnego działania, komenda musi znać obiekt transakcji i konta, do którego zostanie ona dodana. Tworzymy odpowiednie pola i konstruktor:

    ```java
    public AddTransactionCommand(Transaction transactionToAdd, Account account) {
        this.transactionToAdd = transactionToAdd;
        this.account = account;
    }
	```
3. Zaimplementuj metody zadeklarowane w interfejsie `Command`: 
	- `getName()` - powinna zwrócić nazwę komendy, wyświetlaną w dzienniku:
   
	   ```java
		@Override
		public String getName() {
			return "New transaction: " + transactionToAdd.toString();
		}
		```

	- `execute()` - logika, odpowiadająca za wykonanie operacji:
	
	   ```java
		@Override
		public void execute() {
			account.addTransaction(transactionToAdd);
		}
		```
4. Znajdź miejsce w kodzie, w którym wykonywana była dotychczas operacja dodawania transakcji i zastąp ją wywołaniem komendy:
    ```java
    AddTransactionCommand addTransactionCommand = new AddTransactionCommand(transaction, data);
    commandRegistry.executeCommand(addTransactionCommand);
	```
	<Callout>
	Wyjaśnij zasadę działania powyższego kodu.
	</Callout>
5. Uruchom aplikację. Jeśli polecenie zostało wykonane poprawnie, po dodaniu transakcji w dzienniku zadań będą się pojawiać kolejne wpisy:
	![widok komend](/05-ui-2/command-log.png)
	<Callout>
	Wyjaśnij, dlaczego w dzienniku zadań pojawiają się wpisy. Jaki mechanizm tutaj wykorzystano ?
	</Callout>

#### Komenda usuwania transakcji

1. W analogiczny sposób zaimplementuj komendę `RemoveTransactionsCommand`. 
	<Callout>
	Usuwanie zaznaczonych elementów wymaga operacji na selekcji w tabeli. Zastanów się, w jaki sposób przekazać zaznaczone elementy do obiektu komendy. Poprawność rozwiązania wpłynie na wynik kolejnego ćwiczenia.
	</Callout>
2. Przetestuj działanie dziennika dla obu komend.
