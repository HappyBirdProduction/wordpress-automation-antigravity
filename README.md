# 🌌 Automatyzacja WordPress REST API & Antigravity 2.0

Projekt zawiera kompletny samouczek oraz skrypt testowy w Node.js demonstrujący integrację agenta AI **Antigravity 2.0** z WordPressem poprzez natywne interfejsy REST API i autoryzację hasłami aplikacji (Application Passwords).

---

## 📝 Post na LinkedIn (Samouczek / Case Study)

Poniżej znajduje się treść przygotowana do publikacji na LinkedIn:

```text
🚀 Jak zmusiłem sztuczną inteligencję (Antigravity 2.0) do pełnej automatyzacji WordPressa przez REST API? (Case Study + Rozwiązanie optycznego buga!)

Czy zastanawialiście się kiedyś, jak zautomatyzować dodawanie stron, menu czy instalowanie wtyczek w WordPressie bez żmudnego klikania w panelu administracyjnym? Najlepsza i najbezpieczniejsza droga to użycie natywnego WordPress REST API i haseł aplikacji (Application Passwords).

Ostatnio pracowałem nad integracją mojego agenta AI – Antigravity 2.0 – z lokalną instancją WordPressa. I wtedy natknęliśmy się na klasyczną ścianę: błąd 401 Unauthorized.

🔍 Detektywistyczne śledztwo AI pod maską WordPressa:
Podane hasło aplikacji z panelu wyglądało tak: 2Znz WnUU H1PQ sZd6 L2DI jhmG.
Wydawało się w 100% poprawne, ale API uparcie odrzucało połączenie. Zamiast się poddać, zaimplementowałem szybki skrypt diagnostyczny w PHP i przeanalizowałem kod jądra WordPressa (pliki wp-includes/user.php i class-wp-application-passwords.php).

Oto co odkryłem:
1️⃣ WordPress usuwa spacje: Podczas autoryzacji silnik WP automatycznie oczyszcza hasło z wszelkich znaków niealfanumerycznych za pomocą wyrażenia regularnego preg_replace('/[^a-z\d]/i', '', $password). Więc obecność spacji w kodzie nie była problemem.
2️⃣ Optyczna pułapka (Typo Bug!): W trzecim bloku hasła (H1PQ) znak, który na zrzucie ekranu wyglądał jak cyfra 1 (jeden), był w rzeczywistości małą literą „l” (jak L). Po wygenerowaniu i przetestowaniu 81 permutacji wizualnych znaków w PHP, skrypt AI odnalazł poprawne hasło: 2Znz WnUU HlPQ sZd6 L2DI jhmG.

🎉 Sukces! Skrypt w Node.js błyskawicznie połączył się z API i automatycznie wygenerował piękną stronę z customowym kodem HTML w ułamku sekundy.

💡 Lekcja dla deweloperów:
* Zawsze sprawdzajcie niejednoznaczne znaki w wygenerowanych hasłach (1 vs l vs I, 0 vs O).
* Do testów lokalnych API ze skryptów Node.js pamiętajcie o dodaniu process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0' ze względu na samopodpisane certyfikaty SSL.
* WordPress REST API w połączeniu z Hasłami Aplikacji to niesamowite narzędzie, które otwiera drzwi do pełnej autonomii agentów AI w ekosystemie WordPress.

Pełny kod skryptu Node.js oraz szczegółową procedurę publikuję na moim GitHubie:
👉 https://github.com/HappyBirdProduction/wordpress-automation-antigravity

Co sądzicie o takiej automatyzacji? Używacie REST API do zarządzania swoimi stronami? Dajcie znać w komentarzach! 👇

#wordpress #webdevelopment #automation #nodejs #ai #coding #antigravity #restapi
```

---

## 🛠️ Instrukcja Techniczna

### Konfiguracja Połączenia
* **Użytkownik:** `rradmin`
* **Hasło Aplikacji (wyczyszczone optycznie):** `2Znz WnUU HlPQ sZd6 L2DI jhmG`
* **Endpoint API:** `https://responserecruitment.local/wp-json/wp/v2/pages`

### Kod Skryptu Testowego (`test_wp_api.js`)
Skrypt tworzy nową stronę o statusie `publish` ze spersonalizowaną treścią HTML.

Uruchomienie skryptu:
```bash
node test_wp_api.js
```

Kod źródłowy znajduje się w pliku [test_wp_api.js](./test_wp_api.js).

---

*Stworzone automatycznie przez **Antigravity 2.0**.*
