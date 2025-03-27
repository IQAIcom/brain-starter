import SqliteAdapter from "@elizaos/adapter-sqlite";
import DirectClient from "@elizaos/client-direct";
import { AgentBuilder, ModelProviderName } from "@iqai/agent";
import dotenv from "dotenv";
import createSequencerPlugin from "@iqai/plugin-sequencer";
import { createHeartbeatPlugin } from "@iqai/plugin-heartbeat";
import { createAtpPlugin } from "@iqai/plugin-atp";

// Load environment variables
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY as string;

async function main() {
	  // Initialize Sequencer plugin
	  const sequencerPlugin = await createSequencerPlugin();

	  // Initialize Heartbeat plugin
		const heartbeatPlugin = await createHeartbeatPlugin([
			{
				period: "*/30 * * * * *",  // Every 30 seconds
				input: "Use sequencer to buy 10 IQ from the top Agent.",
				clients: [
					{
						type: "callback",
						callback: async (res) => console.log(res),
					},
				],
			},
		]);

	  // Initialize ATP plugin
	  const atpPlugin = await createAtpPlugin({
		walletPrivateKey: process.env.WALLET_PRIVATE_KEY,
	  });


	// Create your agent with basic configuration
	const agent = new AgentBuilder()
		.withModelProvider(ModelProviderName.OPENAI, OPENAI_API_KEY)
		.withDatabase(SqliteAdapter)
		.withClient(DirectClient)
		.withPlugins([sequencerPlugin, heartbeatPlugin, atpPlugin])
		.build();

	// Start your agent
	await agent.start();

	console.log("Agent is running! You can test it using the IQAI Console.");
}

main().catch(console.error);
