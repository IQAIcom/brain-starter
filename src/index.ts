import { SqliteDatabaseAdapter } from "@elizaos/adapter-sqlite";
import DirectClientInterface from "@elizaos/client-direct";
import { AgentBuilder, ModelProviderName } from "@iqai/agent";
import Database from "better-sqlite3";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY as string;

async function main() {
	const databaseAdapter = new SqliteDatabaseAdapter(
		new Database("./data/db.sqlite"),
	);

	// Create your agent with basic configuration
	const agent = new AgentBuilder()
		.withModelProvider(ModelProviderName.OPENAI, OPENAI_API_KEY)
		.withDatabase(databaseAdapter)
		.withClient("direct", DirectClientInterface)
		.build();

	// Start your agent
	await agent.start();

	console.log("Agent is running! You can test it using the IQAI Console.");
}

main().catch(console.error);
